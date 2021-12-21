import {IInputs, IOutputs} from "./generated/ManifestTypes";

export class TSLinearComponent implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	// 组件内部存储和使用的数据
	private _value: number;
	private _notifyOutputChanged: () => void;
	private labelElement: HTMLLabelElement;
	private inputElement: HTMLInputElement;
	private _container: HTMLDivElement;
	// Power Apps Context 对象
	private _context: ComponentFramework.Context<IInputs>;
	// 事件处理
	private _refreshData: EventListenerOrEventListenerObject;

	/**
	 * 空的构造函数
	 */
	constructor() {}

	/**
	 * 初始化控件实例。开启远程服务调用或其他初始化动作。
	 * Data-set 不在这里初始化，使用 updateView。
	 * @param context 通过 Context 对象，控件可以访问整个属性包；包括 manifest 中自定义的属性，也包括 utility 函数
	 * @param notifyOutputChanged 回调函数，通知框架异步获取新的输出
	 * @param state 组件状态，可在组件生命周期的任何点，使用 setControlState 设置
	 * @param container 如果控件类型是 control-type='standard'，他将获取一个空的 div 元素，用于渲染内容
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container: HTMLDivElement): void
	{
		this._context = context;
		this._container = document.createElement('div');
		this._notifyOutputChanged = notifyOutputChanged;
		// 事件处理函数作为回调函数被外部调用，需要保持 this 上下文
		this._refreshData = this.refreshData.bind(this);
		// 创建 range input
		this.inputElement = document.createElement('input');
		this.inputElement.setAttribute('type', 'range');
		// event -> refreshData -> notifyOutputChanged -> getOutput -> updateView                <================== 重点
		this.inputElement.addEventListener('input', this._refreshData);
    this.inputElement.setAttribute('min', '1');
		this.inputElement.setAttribute('max', '1000');
		this.inputElement.setAttribute('class', 'linearslider');
		this.inputElement.setAttribute('id', 'linearrangeinput');
		// 创建 label
		this.labelElement = document.createElement('label');
    this.labelElement.setAttribute('class', 'TS_LinearRangeLabel');
		this.labelElement.setAttribute('id', 'lrclabel');
		// 获取最新的值
		this._value = context.parameters.sliderValue.raw ? context.parameters.sliderValue.raw : 0;
		this.inputElement.value = context.parameters.sliderValue.formatted ? context.parameters.sliderValue.formatted : '0';
    this.labelElement.innerHTML = context.parameters.sliderValue.formatted ? context.parameters.sliderValue.formatted : '0';
    // 把元素添加到容器里
		this._container.appendChild(this.inputElement);
		this._container.appendChild(this.labelElement);
		container.appendChild(this._container);
	}

	/**
	 * 事件处理函数
	 * 更新数据，触发 notifyOutputChanged
	 * @param evt 
	 */
  public refreshData(evt: Event): void {
		this._value = (this.inputElement.value as any) as number;
		this.labelElement.innerHTML = this.inputElement.value;
		this._notifyOutputChanged();
	}

	/**
	 * 属性包中的任何值发生改变，就要调用此函数。
	 * 包括 field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context 上下文对象，组件通过它访问属性
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// 存储最新的上下文
		this._value = context.parameters.sliderValue.raw || 0;
		this._context = context;
    this.inputElement.value = context.parameters.sliderValue.formatted || '0';
		this.labelElement.innerHTML = context.parameters.sliderValue.formatted || '0';
	}

	/**
	 * 控件获取新数据前，先调用此函数
	 * @returns 对象，基于 manifest 中的属性
	 */
	public getOutputs(): IOutputs
	{
		return {
			sliderValue: this._value
		};
	}

	/**
	 * 移除控件时调用
	 * 例如：
	 * - 取消远程调用,
	 * - 移除监听器
	 */
	public destroy(): void
	{
		this.inputElement.removeEventListener('input', this._refreshData);
	}
}

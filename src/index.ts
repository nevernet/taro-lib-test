import * as X from './components';
export { X }; // 这里是必须的，否则components目录不会实际导出

// 实际项目里面，导出的类有好几百个， 太多了，无法单个导出
export * from './components'; // 单纯这样，无法导出整个components目录

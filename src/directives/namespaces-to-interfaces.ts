export const namespacesToInterfaces: Record<string, true | [true] | [true, 'keep_original_ns']> = {
  BusyIndicator: true,
  InstanceManager: true,
  URLHelper: [true, 'keep_original_ns'],
  RuleEngineOpaAssertions: true
};

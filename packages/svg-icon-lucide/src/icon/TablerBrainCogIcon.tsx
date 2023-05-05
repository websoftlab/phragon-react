import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrainCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrainCogIcon = React.forwardRef<SVGSVGElement, TablerBrainCogIconProps>(function TablerBrainCogIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 9.5 22c1.21 0 2.5-.74 2.5-2.5m0-15a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1 1.32 4.24 3 3 0 0 1-.34 5.58 2.5 2.5 0 0 1-2.96 3.08A2.5 2.5 0 0 1 14.5 22c-1.21 0-2.5-.74-2.5-2.5m0-15V5m0 14.5V19" />
			<path d="M14 12 A2 2 0 0 1 12 14 A2 2 0 0 1 10 12 A2 2 0 0 1 14 12" />
			<path d="M12 9v1" />
			<path d="M12 14v1" />
			<path d="m14.6 10.5-.87.5" />
			<path d="m10.27 13-.87.5" />
			<path d="m14.6 13.5-.87-.5" />
			<path d="m10.27 11-.87-.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrainCogIcon.displayName = "TablerBrainCogIcon";
}

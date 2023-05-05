import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxIcon = React.forwardRef<SVGSVGElement, TablerBoxIconProps>(function TablerBoxIcon(props, ref) {
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
			<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
			<path d="M3.29 7 L12 12 L20.71 7" />
			<path d="M12 22 L12 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBoxIcon.displayName = "TablerBoxIcon";
}

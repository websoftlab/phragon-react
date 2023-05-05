import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTv2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTv2Icon = React.forwardRef<SVGSVGElement, TablerTv2IconProps>(function TablerTv2Icon(props, ref) {
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
			<path d="M7 21h10" />
			<path d="M4 3 H20 A2 2 0 0 1 22 5 V15 A2 2 0 0 1 20 17 H4 A2 2 0 0 1 2 15 V5 A2 2 0 0 1 4 3 z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTv2Icon.displayName = "TablerTv2Icon";
}

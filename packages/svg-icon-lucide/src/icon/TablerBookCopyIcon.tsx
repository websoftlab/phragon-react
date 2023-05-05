import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBookCopyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBookCopyIcon = React.forwardRef<SVGSVGElement, TablerBookCopyIconProps>(function TablerBookCopyIcon(
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
			<path d="M2,16V4c0-1.1,0.9-2,2-2h11" />
			<path d="M5,14H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h1" />
			<path d="M22,18H11c-1.1,0-2,0.9-2,2l0,0" />
			<path d="M11,6h11v16H11c-1.1,0-2-0.9-2-2V8C9,6.9,9.9,6,11,6z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBookCopyIcon.displayName = "TablerBookCopyIcon";
}

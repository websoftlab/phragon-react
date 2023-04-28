import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFrameOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFrameOffIcon = React.forwardRef<SVGSVGElement, TablerFrameOffIconProps>(function TablerFrameOffIcon(
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
			<path d="M4 7h3m4 0h9" />
			<path d="M4 17h13" />
			<path d="M7 7v13" />
			<path d="M17 4v9m0 4v3" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFrameOffIcon.displayName = "TablerFrameOffIcon";
}

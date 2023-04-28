import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerApiOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerApiOffIcon = React.forwardRef<SVGSVGElement, TablerApiOffIconProps>(function TablerApiOffIcon(
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
			<path d="M4 13h5" />
			<path d="M12 16v-4m0 -4h3a2 2 0 0 1 2 2v1c0 .554 -.225 1.055 -.589 1.417m-3.411 .583h-1" />
			<path d="M20 8v8" />
			<path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerApiOffIcon.displayName = "TablerApiOffIcon";
}

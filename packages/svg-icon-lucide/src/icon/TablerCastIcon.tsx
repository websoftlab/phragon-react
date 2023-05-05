import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCastIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCastIcon = React.forwardRef<SVGSVGElement, TablerCastIconProps>(function TablerCastIcon(props, ref) {
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
			<path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
			<path d="M2 12a9 9 0 0 1 8 8" />
			<path d="M2 16a5 5 0 0 1 4 4" />
			<path d="M2 20 L2.01 20" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCastIcon.displayName = "TablerCastIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandVscoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandVscoIcon = React.forwardRef<SVGSVGElement, TablerBrandVscoIconProps>(
	function TablerBrandVscoIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
				<path d="M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0z" />
				<path d="M12 3v4" />
				<path d="M21 12h-4" />
				<path d="M12 21v-4" />
				<path d="M3 12h4" />
				<path d="M18.364 5.636l-2.828 2.828" />
				<path d="M18.364 18.364l-2.828 -2.828" />
				<path d="M5.636 18.364l2.828 -2.828" />
				<path d="M5.636 5.636l2.828 2.828" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandVscoIcon.displayName = "TablerBrandVscoIcon";
}

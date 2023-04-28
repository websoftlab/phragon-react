import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandXingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandXingIcon = React.forwardRef<SVGSVGElement, TablerBrandXingIconProps>(
	function TablerBrandXingIcon(props, ref) {
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
				<path d="M16 21l-4 -7l6.5 -11" />
				<path d="M7 7l2 3.5l-3 4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandXingIcon.displayName = "TablerBrandXingIcon";
}

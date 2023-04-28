import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandFlutterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandFlutterIcon = React.forwardRef<SVGSVGElement, TablerBrandFlutterIconProps>(
	function TablerBrandFlutterIcon(props, ref) {
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
				<path d="M7 14l-3 -3l8 -8h6z" />
				<path d="M14 21l-5 -5l5 -5h5l-5 5l5 5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandFlutterIcon.displayName = "TablerBrandFlutterIcon";
}

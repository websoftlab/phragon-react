import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerZodiacLibraIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerZodiacLibraIcon = React.forwardRef<SVGSVGElement, TablerZodiacLibraIconProps>(
	function TablerZodiacLibraIcon(props, ref) {
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
				<path d="M5 20l14 0" />
				<path d="M5 17h5v-.3a7 7 0 1 1 4 0v.3h5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerZodiacLibraIcon.displayName = "TablerZodiacLibraIcon";
}

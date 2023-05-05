import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMegaphoneOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMegaphoneOffIcon = React.forwardRef<SVGSVGElement, TablerMegaphoneOffIconProps>(
	function TablerMegaphoneOffIcon(props, ref) {
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
				<path d="M9.26 9.26 3 11v3l14.14 3.14" />
				<path d="M21 15.34V6l-7.31 2.03" />
				<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
				<path d="M2 2 L22 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMegaphoneOffIcon.displayName = "TablerMegaphoneOffIcon";
}

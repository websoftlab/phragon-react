import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMegaphoneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMegaphoneIcon = React.forwardRef<SVGSVGElement, TablerMegaphoneIconProps>(
	function TablerMegaphoneIcon(props, ref) {
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
				<path d="m3 11 18-5v12L3 14v-3z" />
				<path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMegaphoneIcon.displayName = "TablerMegaphoneIcon";
}

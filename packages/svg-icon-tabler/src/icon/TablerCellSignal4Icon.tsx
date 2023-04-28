import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCellSignal4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCellSignal4Icon = React.forwardRef<SVGSVGElement, TablerCellSignal4IconProps>(
	function TablerCellSignal4Icon(props, ref) {
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
				<path d="M20 20h-15.269a.731 .731 0 0 1 -.517 -1.249l14.537 -14.537a.731 .731 0 0 1 1.249 .517v15.269z" />
				<path d="M16 7v13" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCellSignal4Icon.displayName = "TablerCellSignal4Icon";
}

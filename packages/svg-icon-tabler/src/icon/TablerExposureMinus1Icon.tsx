import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerExposureMinus1IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerExposureMinus1Icon = React.forwardRef<SVGSVGElement, TablerExposureMinus1IconProps>(
	function TablerExposureMinus1Icon(props, ref) {
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
				<path d="M3 12h6" />
				<path d="M18 19v-14l-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerExposureMinus1Icon.displayName = "TablerExposureMinus1Icon";
}

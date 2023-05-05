import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArrowBigUpDashIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArrowBigUpDashIcon = React.forwardRef<SVGSVGElement, TablerArrowBigUpDashIconProps>(
	function TablerArrowBigUpDashIcon(props, ref) {
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
				<path d="M9 19h6" />
				<path d="M9 15v-3H5l7-7 7 7h-4v3H9z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArrowBigUpDashIcon.displayName = "TablerArrowBigUpDashIcon";
}

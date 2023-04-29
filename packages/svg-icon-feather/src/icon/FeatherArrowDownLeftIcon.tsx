import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowDownLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowDownLeftIcon = React.forwardRef<SVGSVGElement, FeatherArrowDownLeftIconProps>(
	function FeatherArrowDownLeftIcon(props, ref) {
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
				<line x1="17" y1="7" x2="7" y2="17" />
				<polyline points="17 17 7 17 7 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowDownLeftIcon.displayName = "FeatherArrowDownLeftIcon";
}

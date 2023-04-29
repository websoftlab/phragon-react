import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowDownRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowDownRightIcon = React.forwardRef<SVGSVGElement, FeatherArrowDownRightIconProps>(
	function FeatherArrowDownRightIcon(props, ref) {
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
				<line x1="7" y1="7" x2="17" y2="17" />
				<polyline points="17 7 17 17 7 17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowDownRightIcon.displayName = "FeatherArrowDownRightIcon";
}

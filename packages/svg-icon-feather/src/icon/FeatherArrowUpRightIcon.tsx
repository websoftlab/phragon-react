import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowUpRightIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowUpRightIcon = React.forwardRef<SVGSVGElement, FeatherArrowUpRightIconProps>(
	function FeatherArrowUpRightIcon(props, ref) {
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
				<line x1="7" y1="17" x2="17" y2="7" />
				<polyline points="7 7 17 7 17 17" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowUpRightIcon.displayName = "FeatherArrowUpRightIcon";
}

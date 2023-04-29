import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherArrowUpLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherArrowUpLeftIcon = React.forwardRef<SVGSVGElement, FeatherArrowUpLeftIconProps>(
	function FeatherArrowUpLeftIcon(props, ref) {
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
				<line x1="17" y1="17" x2="7" y2="7" />
				<polyline points="7 17 7 7 17 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherArrowUpLeftIcon.displayName = "FeatherArrowUpLeftIcon";
}

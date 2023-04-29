import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherUnderlineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherUnderlineIcon = React.forwardRef<SVGSVGElement, FeatherUnderlineIconProps>(
	function FeatherUnderlineIcon(props, ref) {
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
				<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
				<line x1="4" y1="21" x2="20" y2="21" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherUnderlineIcon.displayName = "FeatherUnderlineIcon";
}

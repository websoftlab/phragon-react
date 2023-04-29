import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMinusSquareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMinusSquareIcon = React.forwardRef<SVGSVGElement, FeatherMinusSquareIconProps>(
	function FeatherMinusSquareIcon(props, ref) {
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
				<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
				<line x1="8" y1="12" x2="16" y2="12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherMinusSquareIcon.displayName = "FeatherMinusSquareIcon";
}

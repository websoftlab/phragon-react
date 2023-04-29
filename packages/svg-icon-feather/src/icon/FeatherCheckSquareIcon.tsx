import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCheckSquareIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCheckSquareIcon = React.forwardRef<SVGSVGElement, FeatherCheckSquareIconProps>(
	function FeatherCheckSquareIcon(props, ref) {
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
				<polyline points="9 11 12 14 22 4" />
				<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCheckSquareIcon.displayName = "FeatherCheckSquareIcon";
}

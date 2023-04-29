import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherChevronsLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherChevronsLeftIcon = React.forwardRef<SVGSVGElement, FeatherChevronsLeftIconProps>(
	function FeatherChevronsLeftIcon(props, ref) {
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
				<polyline points="11 17 6 12 11 7" />
				<polyline points="18 17 13 12 18 7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherChevronsLeftIcon.displayName = "FeatherChevronsLeftIcon";
}

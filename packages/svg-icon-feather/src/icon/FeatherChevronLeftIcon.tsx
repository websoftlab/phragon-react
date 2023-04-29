import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherChevronLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherChevronLeftIcon = React.forwardRef<SVGSVGElement, FeatherChevronLeftIconProps>(
	function FeatherChevronLeftIcon(props, ref) {
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
				<polyline points="15 18 9 12 15 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherChevronLeftIcon.displayName = "FeatherChevronLeftIcon";
}

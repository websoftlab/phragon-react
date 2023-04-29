import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMoreHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMoreHorizontalIcon = React.forwardRef<SVGSVGElement, FeatherMoreHorizontalIconProps>(
	function FeatherMoreHorizontalIcon(props, ref) {
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
				<circle cx="12" cy="12" r="1" />
				<circle cx="19" cy="12" r="1" />
				<circle cx="5" cy="12" r="1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherMoreHorizontalIcon.displayName = "FeatherMoreHorizontalIcon";
}

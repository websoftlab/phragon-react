import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMoreVerticalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMoreVerticalIcon = React.forwardRef<SVGSVGElement, FeatherMoreVerticalIconProps>(
	function FeatherMoreVerticalIcon(props, ref) {
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
				<circle cx="12" cy="5" r="1" />
				<circle cx="12" cy="19" r="1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherMoreVerticalIcon.displayName = "FeatherMoreVerticalIcon";
}

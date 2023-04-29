import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherThermometerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherThermometerIcon = React.forwardRef<SVGSVGElement, FeatherThermometerIconProps>(
	function FeatherThermometerIcon(props, ref) {
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
				<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherThermometerIcon.displayName = "FeatherThermometerIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherMousePointerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherMousePointerIcon = React.forwardRef<SVGSVGElement, FeatherMousePointerIconProps>(
	function FeatherMousePointerIcon(props, ref) {
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
				<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
				<path d="M13 13l6 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherMousePointerIcon.displayName = "FeatherMousePointerIcon";
}

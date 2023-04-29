import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherTriangleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherTriangleIcon = React.forwardRef<SVGSVGElement, FeatherTriangleIconProps>(
	function FeatherTriangleIcon(props, ref) {
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
				<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherTriangleIcon.displayName = "FeatherTriangleIcon";
}

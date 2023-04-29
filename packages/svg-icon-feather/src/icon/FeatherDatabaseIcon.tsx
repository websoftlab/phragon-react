import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherDatabaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherDatabaseIcon = React.forwardRef<SVGSVGElement, FeatherDatabaseIconProps>(
	function FeatherDatabaseIcon(props, ref) {
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
				<ellipse cx="12" cy="5" rx="9" ry="3" />
				<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
				<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherDatabaseIcon.displayName = "FeatherDatabaseIcon";
}

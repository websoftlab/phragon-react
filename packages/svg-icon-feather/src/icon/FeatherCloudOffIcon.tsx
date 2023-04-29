import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCloudOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCloudOffIcon = React.forwardRef<SVGSVGElement, FeatherCloudOffIconProps>(
	function FeatherCloudOffIcon(props, ref) {
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
				<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" />
				<line x1="1" y1="1" x2="23" y2="23" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCloudOffIcon.displayName = "FeatherCloudOffIcon";
}

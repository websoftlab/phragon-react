import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherFacebookIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherFacebookIcon = React.forwardRef<SVGSVGElement, FeatherFacebookIconProps>(
	function FeatherFacebookIcon(props, ref) {
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
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherFacebookIcon.displayName = "FeatherFacebookIcon";
}

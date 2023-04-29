import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCameraOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCameraOffIcon = React.forwardRef<SVGSVGElement, FeatherCameraOffIconProps>(
	function FeatherCameraOffIcon(props, ref) {
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
				<line x1="1" y1="1" x2="23" y2="23" />
				<path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCameraOffIcon.displayName = "FeatherCameraOffIcon";
}

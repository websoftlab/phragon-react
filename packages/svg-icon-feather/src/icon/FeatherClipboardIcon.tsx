import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherClipboardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherClipboardIcon = React.forwardRef<SVGSVGElement, FeatherClipboardIconProps>(
	function FeatherClipboardIcon(props, ref) {
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
				<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
				<rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherClipboardIcon.displayName = "FeatherClipboardIcon";
}

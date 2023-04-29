import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherHeadphonesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherHeadphonesIcon = React.forwardRef<SVGSVGElement, FeatherHeadphonesIconProps>(
	function FeatherHeadphonesIcon(props, ref) {
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
				<path d="M3 18v-6a9 9 0 0 1 18 0v6" />
				<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherHeadphonesIcon.displayName = "FeatherHeadphonesIcon";
}

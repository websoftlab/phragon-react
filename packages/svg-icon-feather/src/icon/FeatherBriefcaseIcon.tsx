import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherBriefcaseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherBriefcaseIcon = React.forwardRef<SVGSVGElement, FeatherBriefcaseIconProps>(
	function FeatherBriefcaseIcon(props, ref) {
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
				<rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
				<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherBriefcaseIcon.displayName = "FeatherBriefcaseIcon";
}

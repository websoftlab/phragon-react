import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherGitMergeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherGitMergeIcon = React.forwardRef<SVGSVGElement, FeatherGitMergeIconProps>(
	function FeatherGitMergeIcon(props, ref) {
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
				<circle cx="18" cy="18" r="3" />
				<circle cx="6" cy="6" r="3" />
				<path d="M6 21V9a9 9 0 0 0 9 9" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherGitMergeIcon.displayName = "FeatherGitMergeIcon";
}

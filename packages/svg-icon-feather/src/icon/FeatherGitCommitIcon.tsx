import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherGitCommitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherGitCommitIcon = React.forwardRef<SVGSVGElement, FeatherGitCommitIconProps>(
	function FeatherGitCommitIcon(props, ref) {
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
				<circle cx="12" cy="12" r="4" />
				<line x1="1.05" y1="12" x2="7" y2="12" />
				<line x1="17.01" y1="12" x2="22.96" y2="12" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherGitCommitIcon.displayName = "FeatherGitCommitIcon";
}

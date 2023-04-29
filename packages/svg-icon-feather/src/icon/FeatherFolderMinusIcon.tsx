import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherFolderMinusIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherFolderMinusIcon = React.forwardRef<SVGSVGElement, FeatherFolderMinusIconProps>(
	function FeatherFolderMinusIcon(props, ref) {
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
				<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
				<line x1="9" y1="14" x2="15" y2="14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherFolderMinusIcon.displayName = "FeatherFolderMinusIcon";
}

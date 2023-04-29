import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherBookmarkIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherBookmarkIcon = React.forwardRef<SVGSVGElement, FeatherBookmarkIconProps>(
	function FeatherBookmarkIcon(props, ref) {
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
				<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherBookmarkIcon.displayName = "FeatherBookmarkIcon";
}

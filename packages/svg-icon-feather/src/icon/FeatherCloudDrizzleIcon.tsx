import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface FeatherCloudDrizzleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const FeatherCloudDrizzleIcon = React.forwardRef<SVGSVGElement, FeatherCloudDrizzleIconProps>(
	function FeatherCloudDrizzleIcon(props, ref) {
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
				<line x1="8" y1="19" x2="8" y2="21" />
				<line x1="8" y1="13" x2="8" y2="15" />
				<line x1="16" y1="19" x2="16" y2="21" />
				<line x1="16" y1="13" x2="16" y2="15" />
				<line x1="12" y1="21" x2="12" y2="23" />
				<line x1="12" y1="15" x2="12" y2="17" />
				<path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	FeatherCloudDrizzleIcon.displayName = "FeatherCloudDrizzleIcon";
}

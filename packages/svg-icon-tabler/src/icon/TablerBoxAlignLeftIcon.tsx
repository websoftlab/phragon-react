import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxAlignLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxAlignLeftIcon = React.forwardRef<SVGSVGElement, TablerBoxAlignLeftIconProps>(
	function TablerBoxAlignLeftIcon(props, ref) {
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
				<path d="M9.752 19.753v-16h-5a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1h5z" />
				<path d="M14.752 19.753h-.01" />
				<path d="M19.753 19.753h-.011" />
				<path d="M19.753 14.752h-.011" />
				<path d="M19.753 8.752h-.011" />
				<path d="M19.753 3.752h-.011" />
				<path d="M14.752 3.752h-.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBoxAlignLeftIcon.displayName = "TablerBoxAlignLeftIcon";
}

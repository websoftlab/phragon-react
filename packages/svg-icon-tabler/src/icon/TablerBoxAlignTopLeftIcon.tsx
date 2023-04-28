import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBoxAlignTopLeftIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBoxAlignTopLeftIcon = React.forwardRef<SVGSVGElement, TablerBoxAlignTopLeftIconProps>(
	function TablerBoxAlignTopLeftIcon(props, ref) {
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
				<path d="M11 5v5a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-5a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1z" />
				<path d="M15 4h-.01" />
				<path d="M20 4h-.01" />
				<path d="M20 9h-.01" />
				<path d="M20 15h-.01" />
				<path d="M4 15h-.01" />
				<path d="M20 20h-.01" />
				<path d="M15 20h-.01" />
				<path d="M9 20h-.01" />
				<path d="M4 20h-.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBoxAlignTopLeftIcon.displayName = "TablerBoxAlignTopLeftIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWashDryDipIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWashDryDipIcon = React.forwardRef<SVGSVGElement, TablerWashDryDipIconProps>(
	function TablerWashDryDipIcon(props, ref) {
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
				<path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
				<path d="M12 7v10" />
				<path d="M16 7v10" />
				<path d="M8 7v10" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerWashDryDipIcon.displayName = "TablerWashDryDipIcon";
}

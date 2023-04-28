import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPhotoShieldIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPhotoShieldIcon = React.forwardRef<SVGSVGElement, TablerPhotoShieldIconProps>(
	function TablerPhotoShieldIcon(props, ref) {
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
				<path d="M15 8h.01" />
				<path d="M11.5 20h-4.5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v4" />
				<path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l1.5 1.5" />
				<path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPhotoShieldIcon.displayName = "TablerPhotoShieldIcon";
}

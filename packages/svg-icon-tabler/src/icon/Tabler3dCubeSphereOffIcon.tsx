import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface Tabler3dCubeSphereOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const Tabler3dCubeSphereOffIcon = React.forwardRef<SVGSVGElement, Tabler3dCubeSphereOffIconProps>(
	function Tabler3dCubeSphereOffIcon(props, ref) {
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
				<path d="M6 17.6l-2 -1.1v-2.5" />
				<path d="M4 10v-2.5l2 -1.1" />
				<path d="M10 4.1l2 -1.1l2 1.1" />
				<path d="M18 6.4l2 1.1v2.5" />
				<path d="M20 14v2" />
				<path d="M14 19.9l-2 1.1l-2 -1.1" />
				<path d="M18 8.6l2 -1.1" />
				<path d="M12 12v2.5" />
				<path d="M12 18.5v2.5" />
				<path d="M12 12l-2 -1.12" />
				<path d="M6 8.6l-2 -1.1" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	Tabler3dCubeSphereOffIcon.displayName = "Tabler3dCubeSphereOffIcon";
}

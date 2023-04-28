import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCylinderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCylinderIcon = React.forwardRef<SVGSVGElement, TablerCylinderIconProps>(function TablerCylinderIcon(
	props,
	ref
) {
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
			<path d="M12 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
			<path d="M7 6v12c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCylinderIcon.displayName = "TablerCylinderIcon";
}

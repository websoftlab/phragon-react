import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlowerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlowerIcon = React.forwardRef<SVGSVGElement, TablerFlowerIconProps>(function TablerFlowerIcon(
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
			<path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
			<path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12" />
			<path d="m8 16 1.5-1.5" />
			<path d="M14.5 9.5 16 8" />
			<path d="m8 8 1.5 1.5" />
			<path d="M14.5 14.5 16 16" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFlowerIcon.displayName = "TablerFlowerIcon";
}

import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUmbrellaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUmbrellaIcon = React.forwardRef<SVGSVGElement, TablerUmbrellaIconProps>(function TablerUmbrellaIcon(
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
			<path d="M4 12a8 8 0 0 1 16 0z" />
			<path d="M12 12v6a2 2 0 0 0 4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUmbrellaIcon.displayName = "TablerUmbrellaIcon";
}
